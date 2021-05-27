import Cookie from "js-cookie";
import { useRouter } from "next/router";
import { ElementType, useEffect } from "react";

export default function WithAuth(WrappedComponent: ElementType) {
  const Wrapper = (props: unknown) => {
    const router = useRouter();

    useEffect(() => {
      const token = Cookie.get("token");

      if (!token) router.replace("/");
    }, []);

    return <WrappedComponent {...props} />;
  };

  return Wrapper;
}
