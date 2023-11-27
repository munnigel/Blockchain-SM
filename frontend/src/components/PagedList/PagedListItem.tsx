// React
import React, { PropsWithChildren } from "react";

// Types
import type { PagedListItemProps } from "./PagedList";

const PagedListItem = <ItemValueType,>({
  itemComponent: ItemComponent,
  ...props
}: PropsWithChildren<PagedListItemProps<ItemValueType>>) => (
  <ItemComponent {...props} />
);

export default PagedListItem;
