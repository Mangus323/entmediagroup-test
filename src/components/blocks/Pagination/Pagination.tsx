import React, { useEffect, useState } from "react";
import { Button } from "@/components/elements/Button/Button";
import { InputField } from "@/components/elements/InputField/InputField";
import { useRouter } from "next/router";
import s from "./Pagination.module.scss";

interface PaginationProps {
  lastPage: number;
}

export const Pagination = (props: PaginationProps): JSX.Element => {
  const { lastPage } = props;
  const router = useRouter();
  const currentPage = router.query.page ? +router.query.page : 1;
  const [inputValuePage, setInputValuePage] = useState(currentPage);

  useEffect(() => {
    setInputValuePage(currentPage);
  }, [router.query]);

  const setPrevPage = () => {
    router.push(`/${currentPage - 1}`);
  };

  const setNextPage = () => {
    router.push(`/${currentPage + 1}`);
  };

  // Обычно используется formik
  const submitSetPage = (e: React.FormEvent) => {
    e.preventDefault();
    router.push(`/${inputValuePage}`);
  };

  return (
    <div className={s.container}>
      <Button disabled={currentPage === 1} onClick={setPrevPage}>
        Previous
      </Button>
      <form onSubmit={submitSetPage}>
        <InputField
          type={"number"}
          max={lastPage}
          className={s.input}
          value={inputValuePage}
          onChange={e => setInputValuePage(+e.target.value)}
        />
      </form>
      <Button disabled={currentPage === lastPage} onClick={setNextPage}>
        Next
      </Button>
    </div>
  );
};
