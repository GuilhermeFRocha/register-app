import { LinearProgress } from "@mui/material";
import { AiFillCheckCircle, AiFillExclamationCircle } from "react-icons/ai";
import { PopupMessage } from "./style";

export function Popup({ messageType, progress, title }: any) {
  return (
    <div>
      {messageType === "success" && (
        <PopupMessage>
          <div>
            <AiFillCheckCircle color="green" size={20} />
            <p>{`${title} cadastrado com sucesso!`}</p>
          </div>
          <nav>
            {progress && (
              <LinearProgress
                color={messageType}
                variant="determinate"
                value={progress}
              />
            )}
          </nav>
        </PopupMessage>
      )}

      {messageType === "error" && (
        <PopupMessage>
          <div>
            <AiFillExclamationCircle color="red" size={20} />
            <p>{`Já existe um ${title} com esse nome!`}</p>
          </div>
          <nav>
            {progress && (
              <LinearProgress
                color={messageType}
                variant="determinate"
                value={progress}
              />
            )}
          </nav>
        </PopupMessage>
      )}
    </div>
  );
}
