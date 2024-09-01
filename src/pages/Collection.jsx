import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import FiltersSidebar from "../components/FiltersSidebar";
import AllCollections from "../components/AllCollections";


// Dummy Fixed Data:
import productsData from "../components/FixedData";


const Collection = () => {
	// State to store fetched data
	const [data, setData] = useState([]);
	// State to manage loading status
	const [loading, setLoading] = useState(true);
	// State to handle fetch errors
	// const [errorInFetch, setErrorInFetch] = useState(null);



	// Fetch data on component mount
	useEffect(() => {
		// fetch("https://ahmed-maher77.github.io/Forever__Modern-E-Commerce-Web-Application-with-ReactJS-and-Bootstrap/db.json")
		// 	.then((res) => res.json())
		// 	.then((json) => {
		// 		setData(json);              // Store fetched data
		// 		setLoading(false);          // Stop loading once data is fetched
		// 	}).catch(error => {
		// 		setErrorInFetch(error);     // Handle any errors in fetching
		// 		setLoading(false);          // Stop loading even if there's an error
		// 	})
		setData(productsData);
		setLoading(false);
	}, []);

	return (
		<motion.div
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			exit={{ opacity: 0 }}
			className="collection-page py-3 pt-5"
		>
			<div className="container">
				<div className="row row-gap-4">
					{/* Sidebar with filters */}
					<FiltersSidebar />

					{/* Display all collections with the fetched data */}
					<AllCollections data={data} loading={loading} />
					{/* <AllCollections data={data} loading={loading} errorInFetch={errorInFetch} /> */}
				</div>
			</div>
		</motion.div>
	);
};

export default Collection;
