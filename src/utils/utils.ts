export const brands = [
  "Apple",
  "Microsoft",
  "Dell",
  "HP",
  "Lenovo",
  "Asus",
  "Acer",
  "Samsung",
  "Intel",
  "AMD",
  "Nvidia",
  "Western Digital",
  "Seagate",
  "Corsair",
  "Logitech",
  "Razer",
  "Sony",
  "Toshiba",
  "IBM",
  "Google",
  "Huawei",
];

export const categories = [
  "Desktop Computers",
  "Laptop Computers",
  "Monitors",
  "Keyboards",
  "Mice",
  "Printers",
  "External Hard Drives",
  "Networking Devices",
  "Routers",
  "Switches",
  "Graphics Cards",
  "RAM/Memory Modules",
  "Power Supplies",
  "Computer Cases/Towers",
  "Webcams",
  "Speakers",
  "Headsets",
  "Microphones",
  "UPS (Uninterruptible Power Supply)",
  "Docking Stations",
];

export const steps = [
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

export const capitalizeFirstLetter = (str: string): string => {
  return str.charAt(0).toUpperCase() + str.slice(1);
};
