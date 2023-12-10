import Sheet, { SheetRef } from "react-modal-sheet";
import { useRef, useState } from "react";
import { Button, Rating } from "@mui/material";

type Props = {
  value: boolean;
  setValue: React.Dispatch<React.SetStateAction<boolean>>;
  label: string;
};
export const RatingSheet = ({ value, setValue, label }: Props) => {
  const [ratingValue, setRatingValue] = useState<number | null>(0);
  const ref = useRef<SheetRef>();
  return (
    <>
      <Sheet
        ref={ref}
        isOpen={value}
        onClose={() => setValue(false)}
        snapPoints={[250, 0]}
        initialSnap={0}
      >
        <Sheet.Container style={{ borderRadius: 30 }}>
          <Sheet.Content>
            <div className="bottomIconDiv"></div>
            <div style={{ paddingLeft: "5%" }}>
              <p className="ratingSheetText">{label}</p>
              <div className="ratingDiv">
                <Rating
                  size="large"
                  value={ratingValue}
                  onChange={(event, newValue) => {
                    setRatingValue(newValue);
                  }}
                />
              </div>

              <div className="ratingButtonDiv">
                <Button
                  variant="outlined"
                  style={{
                    width: "90%",
                    height: "40px",
                    alignSelf: "center",
                    backgroundColor: "#304FD9",
                    borderColor: "#304FD9",
                    borderRadius: 28,
                    textTransform: "none",
                  }}
                >
                  <p
                    className="ratingButtonText"
                    onClick={() => setValue(false)}
                  >
                    Поставить оценку
                  </p>
                </Button>
              </div>
            </div>
          </Sheet.Content>
        </Sheet.Container>
      </Sheet>
    </>
  );
};
