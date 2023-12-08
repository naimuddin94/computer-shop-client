"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useForm, SubmitHandler } from "react-hook-form";
import { AddProductSchema } from "@/lib/yupSchemas";
import { brands, categories } from "@/utils/utils";

const steps = [
  {
    id: "Step 1",
    name: "Product Information",
    fields: ["name", "images", "category", "brand", "price"],
  },
  {
    id: "Step 2",
    name: "Features",
    fields: ["features"],
  },
  { id: "Step 3", name: "Description", fields: ["description"] },
];

interface Inputs extends yup.Asserts<typeof AddProductSchema> {}

const ProductForm = () => {
  const [previousStep, setPreviousStep] = useState(0);
  const [currentStep, setCurrentStep] = useState(0);
  const delta = currentStep - previousStep;

  const {
    register,
    handleSubmit,
    watch,
    reset,
    trigger,
    formState: { errors },
  } = useForm<Inputs>({
    resolver: yupResolver(AddProductSchema),
  });

  const processForm: SubmitHandler<Inputs> = (data) => {
    console.log(data);
    reset();
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
      {/* steps */}
      <nav aria-label="Progress">
        <ol role="list" className="space-y-4 md:flex md:space-x-8 md:space-y-0">
          {steps.map((step, index) => (
            <li key={step.name} className="md:flex-1">
              {currentStep > index ? (
                <div className="group flex w-full flex-col border-l-4 border-theme-primary py-2 pl-4 transition-colors md:border-l-0 md:border-t-4 md:pb-0 md:pl-0 md:pt-4">
                  <span className="text-sm font-medium text-theme-primary transition-colors ">
                    {step.id}
                  </span>
                  <span className="text-sm font-medium">{step.name}</span>
                </div>
              ) : currentStep === index ? (
                <div
                  className="flex w-full flex-col border-l-4 border-theme-primary py-2 pl-4 md:border-l-0 md:border-t-4 md:pb-0 md:pl-0 md:pt-4"
                  aria-current="step"
                >
                  <span className="text-sm font-medium text-theme-primary">
                    {step.id}
                  </span>
                  <span className="text-sm font-medium">{step.name}</span>
                </div>
              ) : (
                <div className="group flex w-full flex-col border-l-4 border-[#c8d6e5] py-2 pl-4 transition-colors md:border-l-0 md:border-t-4 md:pb-0 md:pl-0 md:pt-4">
                  <span className="text-sm font-medium text-gray-500 transition-colors">
                    {step.id}
                  </span>
                  <span className="text-sm font-medium">{step.name}</span>
                </div>
              )}
            </li>
          ))}
        </ol>
      </nav>
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
                  <p className="mt-2 text-sm text-red">
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
                  placeholder="Enter product features........"
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
      <div className="pt-4">
        <div className="flex justify-between">
          <button
            type="button"
            onClick={prev}
            disabled={currentStep === 0}
            className="rounded bg-white px-2 py-1 text-sm font-semibold text-sky-900 shadow-sm ring-1 ring-inset ring-sky-300 hover:bg-sky-50 disabled:cursor-not-allowed disabled:opacity-50"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="h-6 w-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 19.5L8.25 12l7.5-7.5"
              />
            </svg>
          </button>
          <button
            type="button"
            onClick={next}
            disabled={currentStep === steps.length - 1}
            className="rounded bg-white px-2 py-1 text-sm font-semibold text-sky-900 shadow-sm ring-1 ring-inset ring-sky-300 hover:bg-sky-50 disabled:cursor-not-allowed disabled:opacity-50"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="h-6 w-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M8.25 4.5l7.5 7.5-7.5 7.5"
              />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};

export default ProductForm;
