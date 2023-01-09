import styles from "./index.module.css";

export interface LayoutComponentProps {
  children: React.ReactNode;
}

export const LayoutComponent: React.FC<LayoutComponentProps> = ({
  children,
}: LayoutComponentProps): JSX.Element => {
  return <div className={styles.container}>{children}</div>;
};
