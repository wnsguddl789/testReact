interface Props {
  children: React.ReactNode;
}

export const Typography = ({ children }: Props) => {
  return <p>{children}</p>;
};
