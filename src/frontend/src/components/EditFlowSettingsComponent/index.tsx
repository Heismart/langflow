import React, { ChangeEvent, useState } from "react";
import { Input } from "../../components/ui/input";
import { Label } from "../../components/ui/label";
import { Textarea } from "../../components/ui/textarea";
import { InputProps } from "../../types/components";

export const EditFlowSettings: React.FC<InputProps> = ({
  name,
  invalidNameList,
  description,
  maxLength = 50,
  setName,
  setDescription,
}: InputProps): JSX.Element => {
  const [isMaxLength, setIsMaxLength] = useState(false);

  const handleNameChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    if (value.length >= maxLength) {
      setIsMaxLength(true);
    } else {
      setIsMaxLength(false);
    }
    setName(value);
  };

  const handleDescriptionChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    setDescription(event.target.value);
  };

  return (
    <>
      <Label>
        <div className="edit-flow-arrangement">
          <span className="font-medium">Name</span>{" "}
          {isMaxLength && (
            <span className="edit-flow-span">Character limit reached</span>
          )}
        </div>
        <Input
          className="nopan nodelete nodrag noundo nocopy mt-2 font-normal"
          onChange={handleNameChange}
          type="text"
          name="name"
          value={name ?? ""}
          placeholder="Flow name"
          id="name"
          maxLength={maxLength}
        />
      </Label>
      <Label>
        <div className="edit-flow-arrangement mt-3">
          <span className="font-medium ">Description (optional)</span>
        </div>

        <Textarea
          name="description"
          id="description"
          onChange={handleDescriptionChange}
          value={description!}
          placeholder="Flow description"
          className="mt-2 max-h-[100px] font-normal"
          rows={3}
        />
      </Label>
    </>
  );
};

export default EditFlowSettings;
