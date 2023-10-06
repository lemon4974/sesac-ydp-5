import { useEffect } from 'react';

//custom hooks
export default function useTitle(title) {
  useEffect(() => {
    const prevTitle = document.title; //현재 title을 가져옴
    document.title = title;

    return () => (document.title = prevTitle);
  }, [title]);
}
