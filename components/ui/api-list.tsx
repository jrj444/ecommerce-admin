"use client";

import { ApiAlert } from "@/components/ui/api-alert";
import { useOrigin } from "@/hooks/use-origin";
import { useParams } from "next/navigation";

interface ApiListProps {
  entityName: string;
  entityIdName: string;
}

export const ApiList: React.FC<ApiListProps> = ({
  entityName,
  entityIdName,
}) => {
  const origin = useOrigin();
  const params = useParams();

  return (
    <>
      <ApiAlert
        title="GET"
        variant="public"
        description={`${origin}/api/${params.storeId}/${entityName}`}
      ></ApiAlert>
      <ApiAlert
        title="GET"
        variant="public"
        description={`${origin}/api/${params.storeId}/${entityName}/{${entityIdName}}`}
      ></ApiAlert>
      <ApiAlert
        title="POST"
        variant="admin"
        description={`${origin}/api/${params.storeId}/${entityName}`}
      ></ApiAlert>
      <ApiAlert
        title="PATCH"
        variant="admin"
        description={`${origin}/api/${params.storeId}/${entityName}/{${entityIdName}}`}
      ></ApiAlert>
      <ApiAlert
        title="DELETE"
        variant="admin"
        description={`${origin}/api/${params.storeId}/${entityName}/{${entityIdName}}`}
      ></ApiAlert>
    </>
  );
};
