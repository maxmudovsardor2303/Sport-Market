import Container from "@/components/container";
import Card from "@/components/card-ui/product-card";
import Jacket from "@/public/images/similar1.png";
import Trinajor from "@/public/images/big-trenajor.png";
import Bag from "@/public/images/big-bag.png";
import Shoe from "@/public/images/big-shoe.png";

const Index = () => {
  return (
    <section className="py-[70px] bg-[#F2F2F2]">
      <Container>
        <p className="text-[32px] font-medium mb-[42px] pl-4 md:pl-0 text-center">
          Похожие продукты
        </p>
        <div className="grid gap-6 px-6 sm:px-14 md:px-10 lg:px-10 sm:grid-cols-2 lg:grid-cols-4">
          <Card
            image={Shoe}
            title="Бутса Nike Mercurial Superfly 8 FG"
            price="500 000"
          />
          <Card
            image={Jacket}
            title="Бутса Nike Mercurial Superfly 8 FG"
            price="500 000"
          />
          <Card
            image={Trinajor}
            title="Бутса Nike Mercurial Superfly 8 FG"
            price="500 000"
          />
          <Card
            image={Bag}
            title="Бутса Nike Mercurial Superfly 8 FG"
            price="500 000"
          />
        </div>
      </Container>
    </section>
  );
};

export default Index;
