export default function useGetParams() {
  const queryParams = new URLSearchParams(window.location.search);
  const name = queryParams.get("name");

  return { name };
}
