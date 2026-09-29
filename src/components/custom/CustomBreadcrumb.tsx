import { Link } from "react-router";
import { Breadcrumb } from "../ui/breadcrumb";
import { BreadcrumbItem } from "../ui/breadcrumb";
import { BreadcrumbLink } from "../ui/breadcrumb";
import { BreadcrumbList } from "../ui/breadcrumb";
import { BreadcrumbPage } from "../ui/breadcrumb";
import { BreadcrumbSeparator } from "../ui/breadcrumb";

interface Props {
  currentPage: string;
}

export const CustomBreadcrumb = ({ currentPage }: Props) => {
  return (
    <div>
      <Breadcrumb aria-label="Breadcrumb">
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink render={<Link to="/" />}>Inicio</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>{currentPage}</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
    </div>
  );
};
