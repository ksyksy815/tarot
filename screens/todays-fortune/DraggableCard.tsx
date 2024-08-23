import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import Draggable from "gsap/Draggable";
import { RefObject, useRef } from "react";
type Props = {
  index: number;
  mainRef: RefObject<HTMLElement>;
  placeRef: RefObject<HTMLDivElement>;
  isOverPlaceRef: RefObject<boolean>; // Change the type here
  setIsOverPlace: (value: boolean) => void;
  setIsDropped: (value: boolean) => void;
};

gsap.registerPlugin(Draggable);

const calculateGapXBetweenCards = (params: {
  cardWidth: number;
  containerWidth: number;
  containerMarginX: number;
}) => {
  const { cardWidth, containerWidth, containerMarginX } = params;
  const cardCount = 78;

  return (
    cardWidth -
    (cardWidth * 78 - (containerWidth - containerMarginX) + cardWidth) / 78
  );
};

const DraggableCard = ({
  index,
  mainRef,
  placeRef,
  isOverPlaceRef,
  setIsOverPlace,
  setIsDropped,
}: Props) => {
  const cardRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    Draggable.create(cardRef.current, {
      bounds: mainRef.current,
      inertia: true,
      onDrag: function () {
        const place = placeRef.current;
        if (place) {
          const placeRect = place.getBoundingClientRect();
          const mouseX = this.pointerX;
          const mouseY = this.pointerY;

          if (
            mouseX >= placeRect.left &&
            mouseX <= placeRect.right &&
            mouseY >= placeRect.top &&
            mouseY <= placeRect.bottom
          ) {
            //@ts-ignore
            isOverPlaceRef.current = true;
            setIsOverPlace(true);
          } else {
            //@ts-ignore
            isOverPlaceRef.current = false;
            setIsOverPlace(false);
          }
        }
      },
      onDragEnd: () => {
        const card = cardRef.current;
        const place = placeRef.current;

        if (card && place) {
          const cardRect = card.getBoundingClientRect();
          const placeRect = place.getBoundingClientRect();
          const parentRect = card.parentElement!.getBoundingClientRect();

          console.log("cardRect:", cardRect);
          console.log("placeRect:", placeRect);
          console.log("parentRect:", parentRect);

          if (isOverPlaceRef.current) {
            setIsDropped(true);
            gsap.set(card, {
              x: placeRect.left - parentRect.left - 20,
              y: placeRect.top - parentRect.top - 20,
            });
          } else {
            setIsDropped(false);
          }
        }
      },
    });
  });

  const left = `${
    20 +
    index *
      calculateGapXBetweenCards({
        cardWidth: 150,
        containerWidth: mainRef.current ? mainRef.current.clientWidth : 1280,
        containerMarginX: 40,
      })
  }px`;

  console.log(mainRef?.current?.clientWidth);

  return (
    <div
      ref={cardRef}
      className={`absolute top-5 h-[250px] w-[150px] min-w-[150px] bg-slate-200 text-black rounded-lg shadow-lg p-5 hover:bg-violet-300`}
      style={{ left }}
    >
      저는 카드에여
    </div>
  );
};

export default DraggableCard;
