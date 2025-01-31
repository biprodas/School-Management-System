import Footer from "./_components/footer";
import Header from "./_components/header";

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex min-h-screen w-full">
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default DashboardLayout;
