import React from 'react';

import styles from './styles.module.scss';

type PaginatorProps = {
  totalPages: number;
  page: number;
  maxPagesToShow?: number;
  onPageChange: (page: number) => void;
};

const Paginator = (props: PaginatorProps): React.ReactElement => {
  const { totalPages, page, maxPagesToShow = 5, onPageChange } = props;

  let startPage: number;
  let endPage: number;

  if (totalPages <= maxPagesToShow) {
    startPage = 1;
    endPage = totalPages;
  } else {
    const maxPagesBeforeCurrentPage = Math.floor(maxPagesToShow / 2);
    const maxPagesAfterCurrentPage = Math.ceil(maxPagesToShow / 2) - 1;

    if (page <= maxPagesBeforeCurrentPage) {
      startPage = 1;
      endPage = maxPagesToShow;
    } else if (page + maxPagesAfterCurrentPage >= totalPages) {
      startPage = totalPages - maxPagesToShow + 1;
      endPage = totalPages;
    } else {
      startPage = page - maxPagesBeforeCurrentPage;
      endPage = page + maxPagesAfterCurrentPage;
    }
  }

  const pages = Array.from(Array(endPage - startPage + 1), (_, i) => startPage + i);

  return (
    <div className={styles.paginator}>
      <button
        className={`${styles.pageLink} ${styles.first}  ${
          page === 1 ? styles.disabled : ''
        }`}
        onClick={() => onPageChange(1)}
        disabled={page === 1}
      >
        1
      </button>

      <button
        className={`${styles.pageLink} ${page === 1 ? styles.disabled : ''}`}
        onClick={() => onPageChange(page - 1)}
        disabled={page === 1}
      >
        Prev
      </button>

      {pages.map(pageNum => (
        <button
          key={pageNum}
          className={`${styles.pageLink} ${pageNum === page ? styles.active : ''}`}
          onClick={() => onPageChange(pageNum)}
        >
          {pageNum}
        </button>
      ))}

      <button
        className={`${styles.pageLink} ${page === totalPages ? styles.disabled : ''}`}
        onClick={() => onPageChange(page + 1)}
        disabled={page === totalPages}
      >
        Next
      </button>

      <button
        className={`${styles.pageLink} ${styles.last}  ${
          page === totalPages ? styles.disabled : ''
        }`}
        onClick={() => onPageChange(totalPages)}
        disabled={page === totalPages}
      >
        {totalPages}
      </button>
    </div>
  );
};

export { Paginator };
