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
import useAxiosSecure from "@/hooks/useAxiosSecure";
import ImageUpload from "../shared/ImageUpload";
import { toast } from "react-toastify";
import PrivateRoute from "../routes/PrivateRoute";
import { RootState } from "@/redux/store/store";
import { useSelector } from "react-redux";
interface Inputs extends yup.Asserts<typeof AddProductSchema> {}

const ProductForm = () => {
  const { name, email } = useSelector((state: RootState) => state.user);
  const axiosSecure = useAxiosSecure();
  const [previousStep, setPreviousStep] = useState(0);
  const [currentStep, setCurrentStep] = useState(0);
  const delta = currentStep - previousStep;

  const {
    register,
    handleSubmit,
    reset,
    trigger,
    formState: { errors, isSubmitting },
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
      const uploadPromises = Array.from(imageFiles).map(
        async (imageFile) => await ImageUpload(imageFile)
      );

      const images = await Promise.all(uploadPromises);

      const publisher = {
        name,
        email,
      };

      const product = { images, features, ...reamingData, publisher };

      await axiosSecure.post("/products", product).then((res) => {
        toast.success(res.data.message);
        reset();
      });
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
    <PrivateRoute>
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
                    placeholder="Enter product name"
                    className="input input-bordered rounded"
                  />
                  {errors.name?.message && (
                    <p className="mt-1 text-sm text-red">
                      {errors.name.message}
                    </p>
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
                    accept=".jpeg, .png, .jpg, .webp"
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
                    placeholder="Product price"
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
                      defaultValue=""
                      id="brand"
                      {...register("brand")}
                      className="select select-accent w-full rounded"
                    >
                      <option disabled value="">
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
                      defaultValue=""
                      id="category"
                      {...register("category")}
                      className="select select-accent w-full rounded"
                    >
                      <option disabled value="">
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
                <button
                  disabled={isSubmitting}
                  className="btn btn-accent rounded ml-auto min-w-[200px]"
                >
                  {isSubmitting ? (
                    <span className="loading loading-spinner text-warning"></span>
                  ) : (
                    "Add Product"
                  )}
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
    </PrivateRoute>
  );
};

export default ProductForm;
