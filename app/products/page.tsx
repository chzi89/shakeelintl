import Products from "@/components/Products";
import GlobalExport from "@/components/GlobalExport";

export const metadata = {
  title: "Products & Global Export — Shakeel International",
  description:
    "Premium Himalayan pink salt products and worldwide export services by Shakeel International.",
};

export default function Page() {
  return (
    <main>
      <h3>shakeelintel</h3>
      
        <Products />
      
      
        <GlobalExport />

      
    </main>
  );
}
