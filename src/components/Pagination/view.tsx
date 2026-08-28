import { useState } from "react";
import ResponsivePagination from "react-responsive-pagination";
// import "react-responsive-pagination/themes/classic-light-dark.css";

interface Props {
  className?: string;
}

const Pagination = ({ className }: Props) => {
  const [currentPage, setCurrentPage] = useState(8);
  const totalPages = 1;
  return (
    <ResponsivePagination
      className={`pagination ${className}`}
      current={currentPage}
      total={totalPages}
      onPageChange={setCurrentPage}
    />
  );
};

export default Pagination;
