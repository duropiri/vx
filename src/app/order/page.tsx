// app/order-forms/018e5ff1-0bc6-707e-9947-bc385f21a938/page.tsx
import { redirect } from "next/navigation";

export default function OrderFormRedirect() {
  redirect("https://listings.virtualxposure.com/order");
  return null; // This line will never be reached.
}