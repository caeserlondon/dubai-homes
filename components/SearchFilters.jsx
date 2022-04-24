import { useState, useEffect } from "react";
import {
	Flex,
	Select,
	Box,
	Text,
	Spinner,
	Input,
	Button,
	Icon,
} from "@chakra-ui/react";
import { useRouter } from "next/router";
import { MdCancel } from "react-icons/md";
import Image from "next/image";
import { baseUrl, fetchApi } from "../utils/fetchApi";
import noresult from "../assets/images/noresult.svg";

const SearchFilters = () => {
	return <div>searchFilters</div>;
};

export default SearchFilters;
