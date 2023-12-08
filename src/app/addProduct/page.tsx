import { ProductForm } from "@/components";

const AddProductPage = () => {
  return (
    <div className="flex justify-center items-center min-h-[calc(100vh-64px)] relative">
      <div className="max-w-3xl rounded shadow bg-white card-body mx-2 my-9">
        <ProductForm />
      </div>
    </div>
  );
};

export default AddProductPage;
