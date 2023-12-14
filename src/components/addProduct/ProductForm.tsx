"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useForm, SubmitHandler } from "react-hook-form";
import { AddProductSchema } from "@/lib/yupSchemas";
import { brands, categories, steps } from "@/utils/utils";
import FormStemNavigation from "./FormStepNavigation";
import Navigation from "./Navigation";
interface Inputs extends yup.Asserts<typeof AddProductSchema> {}

const ProductForm = () => {
  const [previousStep, setPreviousStep] = useState(0);
  const [currentStep, setCurrentStep] = useState(0);
  const delta = currentStep - previousStep;

  const {
    register,
    handleSubmit,
    reset,
    trigger,
    formState: { errors },
  } = useForm<Inputs>({
    resolver: yupResolver(AddProductSchema),
  });

  const processForm: SubmitHandler<Inputs> = async (data) => {
    const {
      images: imageFiles,
      features: stringFeatures,
      ...reamingData
    } = data;
    const features = stringFeatures.split(",");
    console.log(features, reamingData);

    if (imageFiles instanceof FileList) {
      const imagesArray = Array.from(imageFiles);
      const formDataArray = imagesArray.map((image) => {
        const formData = new FormData();
        formData.append("file", image);
        formData.append("upload_preset", "pntxhvfd");
        return formData;
      });

      try {
        const uploadPromises = formDataArray.map((formData) => {
          return fetch(
            `https://api.cloudinary.com/v1_1/dxoncladp/image/upload`,
            {
              method: "POST",
              body: formData,
            }
          );
        });

        const responses = await Promise.all(uploadPromises);
        const uploadedImages = await Promise.all(
          responses.map((res) => res.json())
        );

        const images = uploadedImages.map((data) => data.secure_url);

        const publisher = {
          name: "Esmail Hossen",
          email: "esmail@gmail.com",
        };

        const product = { images, features, ...reamingData, publisher };

        console.log(product);
      } catch (error) {
        console.error("Error uploading image:", error);
      }
    }
  };

  type FieldName = keyof Inputs;

  const next = async () => {
    const fields = steps[currentStep].fields;
    const output = await trigger(fields as FieldName[], { shouldFocus: true });

    if (!output) return;

    if (currentStep < steps.length - 1) {
      setPreviousStep(currentStep);
      setCurrentStep((step) => step + 1);
    }
  };

  const prev = () => {
    if (currentStep > 0) {
      setPreviousStep(currentStep);
      setCurrentStep((step) => step - 1);
    }
  };

  return (
    <section>
      {/* navigation steps */}
      <FormStemNavigation currentStep={currentStep} />

      <form onSubmit={handleSubmit(processForm)}>
        {currentStep === 0 && (
          <motion.div
            initial={{ x: delta >= 0 ? "50%" : "-50%", opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            <div className="flex gap-4 flex-col md:flex-row">
              <div className="form-control flex-1">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  id="name"
                  {...register("name")}
                  type="text"
                  placeholder="enter your name"
                  className="input input-bordered rounded"
                />
                {errors.name?.message && (
                  <p className="mt-1 text-sm text-red">{errors.name.message}</p>
                )}
              </div>
              <div className="form-control flex-1">
                <label className="label">
                  <span className="label-text">Images</span>
                </label>
                <input
                  id="images"
                  {...register("images")}
                  type="file"
                  multiple
                  accept=".jpeg, .png, .jpg"
                  className="file-input file-input-bordered file-input-accent rounded w-full"
                />
                {errors.images?.message && (
                  <p className="mt-1 text-sm text-red">
                    {errors.images.message}
                  </p>
                )}
              </div>
            </div>

            <div className="flex gap-4 flex-col md:flex-row">
              <div className="form-control flex-1">
                <label className="label">
                  <span className="label-text">Price</span>
                </label>
                <input
                  id="price"
                  {...register("price")}
                  type="text"
                  placeholder="product price"
                  className="input input-bordered rounded"
                />
                {errors.price?.message && (
                  <p className="mt-1 text-sm text-red">
                    {errors.price.message}
                  </p>
                )}
              </div>
              <div className="form-control flex-1">
                <label className="label">
                  <span className="label-text">Brand</span>
                </label>
                <div className="relative">
                  <select
                    id="brand"
                    {...register("brand")}
                    className="select select-accent w-full rounded"
                  >
                    <option disabled selected>
                      Select product brand?
                    </option>
                    {brands?.map((brand) => (
                      <option key={brand} value={brand}>
                        {brand}
                      </option>
                    ))}
                  </select>
                  {errors.brand?.message && (
                    <p className="mt-1 text-sm text-red">
                      {errors.brand.message}
                    </p>
                  )}
                </div>
              </div>
              <div className="form-control flex-1">
                <label className="label">
                  <span className="label-text">Category</span>
                </label>
                <div className="relative">
                  <select
                    id="category"
                    {...register("category")}
                    className="select select-accent w-full rounded"
                  >
                    <option disabled selected>
                      Select product category?
                    </option>
                    {categories?.map((category) => (
                      <option key={category} value={category}>
                        {category}
                      </option>
                    ))}
                  </select>
                  {errors.category?.message && (
                    <p className="mt-1 text-sm text-red">
                      {errors.category.message}
                    </p>
                  )}
                </div>
              </div>
            </div>
          </motion.div>
        )}

        {currentStep === 1 && (
          <motion.div
            initial={{ x: delta >= 0 ? "50%" : "-50%", opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            <div className="form-control">
              <label className="label">
                <span className="label-text">Features</span>
              </label>
              <div className="relative">
                <textarea
                  id="features"
                  {...register("features")}
                  rows={4}
                  className="textarea textarea-bordered rounded w-full"
                  placeholder="Enter product features with ',' to separate add min 4 features........"
                ></textarea>
              </div>
              {errors.features?.message && (
                <p className="mt-1 text-sm text-red">
                  {errors.features.message}
                </p>
              )}
            </div>
          </motion.div>
        )}

        {currentStep === 2 && (
          <motion.div
            initial={{ x: delta >= 0 ? "50%" : "-50%", opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            <div className="form-control">
              <label className="label">
                <span className="label-text">Description</span>
              </label>
              <div className="relative">
                <textarea
                  id="description"
                  {...register("description")}
                  rows={4}
                  className="textarea textarea-bordered rounded w-full"
                  placeholder="Enter product description here........"
                ></textarea>
              </div>
              {errors.description?.message && (
                <p className="mt-1 text-sm text-red">
                  {errors.description.message}
                </p>
              )}
            </div>
            <div className="form-control mt-2">
              <button className="btn btn-accent rounded w-fit ml-auto">
                Add Product
              </button>
            </div>
          </motion.div>
        )}
      </form>
      {/* Navigation */}
      <Navigation
        prev={prev}
        next={next}
        currentStep={currentStep}
        steps={steps}
      />
    </section>
  );
};

export default ProductForm;
