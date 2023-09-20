import moment from "moment";
import { useEffect, useState } from "react";
// import { useDispatch, useSelector } from "react-redux"
// import { showNotification } from '../../common/headerSlice'
import InputText from "../../components/Input/InputText";
import TextAreaInput from "../../components/Input/TextAreaInput";
import ToogleInput from "../../components/Input/ToogleInput";

function EditProfile() {
  // const dispatch = useDispatch()

  // Call API to update profile settings changes
  const updateProfile = () => {
    // dispatch(showNotification({message : "Profile Updated", status : 1}))
  };

  const updateFormValue = ({ updateType, value }) => {
    console.log(updateType);
  };

  return (
    <>
      <div className="card m-5 bg-base-100 p-6 shadow-xl">
        <div className="overflow-x-auto">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            <InputText
              labelTitle="Name"
              defaultValue="Alex"
              updateFormValue={updateFormValue}
            />
            <InputText
              labelTitle="Email Id"
              defaultValue="alex@dashwind.com"
              updateFormValue={updateFormValue}
            />
            <InputText
              labelTitle="Title"
              defaultValue="UI/UX Designer"
              updateFormValue={updateFormValue}
            />
            <InputText
              labelTitle="Place"
              defaultValue="California"
              updateFormValue={updateFormValue}
            />
            <TextAreaInput
              labelTitle="About"
              defaultValue="Doing what I love, part time traveller"
              updateFormValue={updateFormValue}
            />
          </div>
          <div className="divider"></div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            <InputText
              labelTitle="Language"
              defaultValue="English"
              updateFormValue={updateFormValue}
            />
            <InputText
              labelTitle="Timezone"
              defaultValue="IST"
              updateFormValue={updateFormValue}
            />
            <ToogleInput
              updateType="syncData"
              labelTitle="Sync Data"
              defaultValue={true}
              updateFormValue={updateFormValue}
            />
          </div>

          <div className="mt-16">
            <button
              className="btn btn-primary float-right"
              onClick={() => updateProfile()}
            >
              Update
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default EditProfile;