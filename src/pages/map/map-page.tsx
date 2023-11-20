import "./map-page.css";
import YaMap from "../../components/YaMap";
import { TextField } from "@mui/material";
import Sheet, {SheetRef} from "react-modal-sheet";
import React, {useRef, useState} from "react";


export default function MapPage() {
    const [isOpen, setOpen] = useState(false);
    const ref = useRef<SheetRef>();
    const snapTo = (i: number) => ref.current?.snapTo(i);

  return (
    <>
      <div className="input_map">
        <TextField
          id="outlined-basic"
          fullWidth
          label="Поиск"
          variant="outlined"
        />
      </div>
      <YaMap width={"100vw"} height={"100vh"} zoomControl={true} />

        <button onClick={() => setOpen(true)}>Open sheet</button>

        {/* Opens to 400 since initial index is 1 */}
        <Sheet
            ref={ref}
            isOpen={isOpen}
            onClose={() => setOpen(false)}
            snapPoints={[800, 600, 400, 100, 0]}
            initialSnap={1}
        >
            <Sheet.Container>
                <Sheet.Content>
                    <button onClick={() => snapTo(0)}>Snap to index 0</button>
                    <button onClick={() => snapTo(1)}>Snap to index 1</button>
                    <button onClick={() => snapTo(2)}>Snap to index 2</button>
                    <button onClick={() => snapTo(3)}>Snap to index 3</button>
                </Sheet.Content>
            </Sheet.Container>
        </Sheet>
    </>
  );
}
