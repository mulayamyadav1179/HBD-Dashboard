import {
  Card,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import api from "../utils/Api";

export function Dasboard2() {
  const [productscount, setProductscount] = useState(0);
  const [citycount, setCitycount] = useState(0);
  const [categorycount, setCategorycount] = useState(0);

  // static product data count
  const productDataCount = 1200000;

  useEffect(() => {
    fetchProductsData();
  }, []);

  const fetchProductsData = async () => {
    try {
      const response = await api.get("/googlemap_data");
      const products = response.data;

      // Extract unique cities
      const citys = products.map((product) => product.city);
      const uniqueCities = [...new Set(citys)];
      setCitycount(uniqueCities.length);

      // Extract unique categories
      const categories = products.map((product) => product.category);
      const uniqueCategories = [...new Set(categories)];
      setCategorycount(uniqueCategories.length);

      // product counter
      setProductscount(response.data.length);
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };

  // total count = product data + listing data
  const totalCount = productDataCount + productscount;

  return (
    <>
      {/* 🔝 Top Section - Total Count */}
      <div className="w-full px-4 mt-6">
        <Card className="w-full bg-gradient-to-r from-gray-400 to-gray-300 shadow-lg">
          <CardBody className="text-center">
            <Typography variant="h2" color="blue-gray" className="mb-2">
              Total Data Count
            </Typography>
            <Typography variant="h3" color="gray" className="mt-2 mb-6">
              {totalCount}
            </Typography>
          </CardBody>
        </Card>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-6">
        {/* Left Section - Product Data */}
        <Card className="w-full  bg-gradient-to-r from-gray-400 to-gray-300 shadow-lg ">
          <CardBody>
            <Typography variant="h2" color="blue-gray" className="mb-2">
              Cities Scrapped
            </Typography>
            <Typography variant="h3" color="gray" className="mt-2">
              {productDataCount}
            </Typography>
          </CardBody>
          <CardFooter className="pt-0">
            <Link to="/dashboard/productdata-report" className="inline-block">
              <Button size="sm" variant="text" className="flex items-center gap-2">
                View More
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                  className="h-4 w-4"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                  />
                </svg>
              </Button>
            </Link>
          </CardFooter>
        </Card>

        {/* Right Section - Listing Data */}
        <Card className="w-full bg-gradient-to-r from-gray-400 to-gray-300 shadow-lg ">
          <CardBody>
            <Typography variant="h2" color="blue-gray" className="mb-2">
              Categories Scrapped
            </Typography>
            <Typography variant="h3" color="gray" className="mt-2">
              {productscount}
            </Typography>
          </CardBody>
          <CardFooter className="pt-0">
            <Link to="/dashboard/listingdata-report" className="inline-block">
              <Button size="sm" variant="text" className="flex items-center gap-2">
                View More
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                  className="h-4 w-4"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                  />
                </svg>
              </Button>
            </Link>
          </CardFooter>
        </Card>
      </div>

      {/* Existing Layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-6">
        {/* Left Section - Product Data */}
        <div className="left p-5 rounded bg-gradient-to-r from-gray-300 to-gray-200 shadow-lg">
          <Card className="w-full bg-gradient-to-r from-gray-200 to-gray-100 shadow-lg">
            <CardBody>
              <Typography variant="h2" color="blue-gray" className="mb-2">
                Product Data
              </Typography>
              <Typography variant="h3" color="gray" className="mt-2">
                {productDataCount}
              </Typography>
            </CardBody>
            <CardFooter className="pt-0">
              <Link to="/dashboard/productdata-report" className="inline-block">
                <Button size="sm" variant="text" className="flex items-center gap-2">
                  View More
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={2}
                    stroke="currentColor"
                    className="h-4 w-4"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                    />
                  </svg>
                </Button>
              </Link>
            </CardFooter>
          </Card>
          <Card className="w-full m-1">
            <CardBody>
              <Typography variant="h5" color="blue-gray" className="mb-2">
                Total Category scrapped
              </Typography>
              <Typography variant="h3" color="gray" className="mt-2">
                {categorycount}
              </Typography>
            </CardBody>
          </Card>
          <Card className="w-full m-1">
            <CardBody>
              <Typography variant="h5" color="blue-gray" className="mb-2">
                Total Category scrapped
              </Typography>
              <Typography variant="h3" color="gray" className="mt-2">
                {citycount}
              </Typography>
            </CardBody>
          </Card>
        </div>

        {/* Right Section - Listing Data */}
        <div className="right p-5 rounded bg-gradient-to-r from-gray-300 to-gray-200 shadow-lg">
          <Card className="w-full bg-gradient-to-r from-gray-200 to-gray-100 shadow-lg">
            <CardBody>
              <Typography variant="h2" color="blue-gray" className="mb-2">
                Listing Data
              </Typography>
              <Typography variant="h3" color="gray" className="mt-2">
                {productscount}
              </Typography>
            </CardBody>
            <CardFooter className="pt-0">
              <Link to="/dashboard/listingdata-report" className="inline-block">
                <Button size="sm" variant="text" className="flex items-center gap-2">
                  View More
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={2}
                    stroke="currentColor"
                    className="h-4 w-4"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                    />
                  </svg>
                </Button>
              </Link>
            </CardFooter>
          </Card>

          {/* Additional Info Cards */}
          <Card className="w-full m-1">
            <CardBody>
              <Typography variant="h5" color="blue-gray" className="mb-2">
                Total Area scrapped
              </Typography>
              <Typography variant="h3" color="gray" className="mt-2">
                {citycount}
              </Typography>
            </CardBody>
          </Card>


          <Card className="w-full m-1">
            <CardBody>
              <Typography variant="h5" color="blue-gray" className="mb-2">
                Total Area scrapped
              </Typography>
              <Typography variant="h3" color="gray" className="mt-2">
                {categorycount}
              </Typography>
            </CardBody>
          </Card>
        </div>
      </div>
    </>
  );
}

export default Dasboard2;
