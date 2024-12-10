import React, { useEffect, useRef, useState } from "react";
import { gsap } from "@/utils/gsap";

// Generic interface for list items - this can be extended based on needs
export interface ExpandableListProps<T> {
  items: T[]; // Array of any type of items
  initialVisibleItems?: number; // Number of items to show initially
  renderItem: (item: T, index: number) => React.ReactNode; // Function to render each item
  showMoreText?: string; // Custom "show more" text
  showLessText?: string; // Custom "show less" text

  // Styling props
  className?: string; // Container className
  listClassName?: string; // UL element className
  itemClassName?: string; // LI element className
  showMoreClassName?: string; // Show more/less button className

  // Animation props
  animationDuration?: number; // Duration of expand/collapse animation

  // Optional callbacks
  onExpand?: () => void; // Called after expansion
  onCollapse?: () => void; // Called after collapse
}

function ExpandableList<T>({
  items,
  initialVisibleItems = 3,
  renderItem,
  showMoreText = "and more...",
  showLessText = "show less",
  className = "",
  listClassName = "",
  itemClassName = "",
  showMoreClassName = "",
  animationDuration = 0.5,
  onExpand,
  onCollapse,
}: ExpandableListProps<T>) {
  const [isExpanded, setIsExpanded] = useState(false);
  const hiddenItemsRef = useRef<HTMLDivElement>(null);
  const showMoreRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const hiddenItems = hiddenItemsRef.current;
    const showMoreButton = showMoreRef.current;

    if (!hiddenItems || !showMoreButton) return;

    // Set initial states
    gsap.set(hiddenItems, {
      height: 0,
      opacity: 0,
      display: "none",
    });

    // Only show the "show more" button if there are hidden items
    if (items.length <= initialVisibleItems) {
      gsap.set(showMoreButton, { display: "none" });
    }
  }, [items.length, initialVisibleItems]);

  const toggleList = () => {
    const hiddenItems = hiddenItemsRef.current;
    const showMoreButton = showMoreRef.current;

    if (!hiddenItems || !showMoreButton) return;

    setIsExpanded((prev) => !prev);

    if (!isExpanded) {
      // Expanding
      gsap.set(hiddenItems, { display: "block" });
      gsap.to(hiddenItems, {
        height: "auto",
        opacity: 1,
        duration: animationDuration,
        ease: "power2.out",
        onComplete: () => onExpand?.(),
      });
    } else {
      // Collapsing
      gsap.to(hiddenItems, {
        height: 0,
        opacity: 0,
        duration: animationDuration,
        ease: "power2.in",
        onComplete: () => {
          gsap.set(hiddenItems, { display: "none" });
          onCollapse?.();
        },
      });
    }
  };

  const visibleItems = items.slice(0, initialVisibleItems);
  const hiddenItems = items.slice(initialVisibleItems);
  const hasHiddenItems = hiddenItems.length > 0;

  return (
    <div className={className}>
      {/* Visible items */}
      <ul className={listClassName}>
        {visibleItems.map((item, index) => (
          <li key={index} className={itemClassName}>
            {renderItem(item, index)}
          </li>
        ))}
      </ul>

      {/* Hidden items */}
      <div ref={hiddenItemsRef}>
        <ul className={listClassName}>
          {hiddenItems.map((item, index) => (
            <li key={index + initialVisibleItems} className={itemClassName}>
              {renderItem(item, index + initialVisibleItems)}
            </li>
          ))}
        </ul>
      </div>

      {/* Toggle button */}
      {hasHiddenItems && (
        <div
          ref={showMoreRef}
          onClick={toggleList}
          className={showMoreClassName}
        >
          {isExpanded ? showLessText : showMoreText}
        </div>
      )}
    </div>
  );
}

/**
 * Usage Examples:
 *
 * @example
 * // Example usage with detail list
 * const DetailListExample = () => (
 *   <ExpandableList
 *     items={detailList}
 *     initialVisibleItems={3}
 *     className="flex flex-col size-full items-start space-y-[1rem]"
 *     itemClassName="group flex flex-row items-center text-start gap-[1rem] sm:gap-[0.5rem]"
 *     showMoreClassName="mt-4 cursor-pointer pn-regular-16 text-white/80 hover:text-white"
 *     renderItem={(detail, index) => (
 *       <>
 *         <div className="size-[2rem] sm:size-[1rem] min-w-[2rem] sm:min-w-[1rem] max-w-[2rem] sm:max-w-[1rem] text-white/80 group-hover:text-white">
 *           {detail.icon}
 *         </div>
 *         <p className="pn-regular-20 text-white/80 group-hover:text-white">
 *           {detail.text}
 *         </p>
 *       </>
 *     )}
 *   />
 * );
 *
 * @example
 * // Example with simple strings
 * const StringListExample = () => (
 *   <ExpandableList
 *     items={["Item 1", "Item 2", "Item 3", "Item 4", "Item 5"]}
 *     initialVisibleItems={2}
 *     className="space-y-2"
 *     itemClassName="text-gray-800"
 *     showMoreClassName="mt-2 text-blue-500 cursor-pointer hover:text-blue-700"
 *     renderItem={(item) => <span>{item}</span>}
 *   />
 * );
 *
 * @example
 * // Example with custom objects
 * interface Product {
 *   name: string;
 *   price: number;
 *   description: string;
 * }
 *
 * const ProductListExample = () => (
 *   <ExpandableList<Product>
 *     items={products}
 *     initialVisibleItems={4}
 *     className="grid gap-4"
 *     itemClassName="border p-4 rounded"
 *     showMoreClassName="mt-4 text-blue-500 cursor-pointer"
 *     renderItem={(product) => (
 *       <div>
 *         <h3>{product.name}</h3>
 *         <p>${product.price}</p>
 *         <p>{product.description}</p>
 *       </div>
 *     )}
 *   />
 * );
 */

export default ExpandableList;
