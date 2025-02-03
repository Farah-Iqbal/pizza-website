export default function handler(req, res) {
    const products = [
        {
            id: 1,
            name: "Prawn Deluxe",
            price: 1299,
            image: "https://www.yellowtaxipizzaco.com/_next/image?url=https%3A%2F%2Fassets.indolj.io%2Fimages%2F1733923859-WhatsApp%20Image%202024-12-11%20at%205.47.00%20AM.jpeg%3Fq%3D10&w=640&q=75",
        },

        {
            id: 2,
            name: "Three Layered Pepperoni",
            price: 2299,
            image: "https://www.yellowtaxipizzaco.com/_next/image?url=https%3A%2F%2Fassets.indolj.io%2Fimages%2F1646915726-Untitled-1.jpg%3Fq%3D10&w=640&q=75",
        },

        {
            id: 3,
            name: "Three Layered Peri Peri",
            price: 1304,
            image: "https://www.yellowtaxipizzaco.com/_next/image?url=https%3A%2F%2Fassets.indolj.io%2Fimages%2F1659595673-1.1%20(2).jpg%3Fq%3D10&w=640&q=75",
        },

        {
            id: 4,
            name: "Three Layered Chicken Max",
            price: 1304,
            image: "https://www.yellowtaxipizzaco.com/_next/image?url=https%3A%2F%2Fassets.indolj.io%2Fimages%2F1651357201-Three%20Layered%20Chicken%20Max.jpg%3Fq%3D10&w=640&q=75",
        },

        {
            id: 5,
            name: "Half And Half",
            price: 991,
            image: "https://www.yellowtaxipizzaco.com/_next/image?url=https%3A%2F%2Fassets.indolj.io%2Fimages%2F1624861958-half-n-half.jpg%3Fq%3D10&w=640&q=75",
        },

        {
            id: 6,
            name: "Ranch",
            price: 991,
            image: "https://www.yellowtaxipizzaco.com/_next/image?url=https%3A%2F%2Fassets.indolj.io%2Fimages%2F1625118715-RANCH.jpg%3Fq%3D10&w=640&q=75",
        },
    ];
    res.status(200).json(products);
};
