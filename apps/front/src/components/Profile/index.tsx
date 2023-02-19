import Image from "next/image";
import { useForm, SubmitHandler } from "react-hook-form";
import classNames from "classnames/bind";
import styles from "./index.module.scss";

interface FormValue {
  email: string;
  name: string;
}

const cn = classNames.bind(styles);

const Profile = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isValid },
  } = useForm<FormValue>();

  const onSubmitHandler: SubmitHandler<FormValue> = (data) => {
    console.log(data);
  };

  return (
    <div className={styles.contents}>
      <div className={styles.image_container}>
        <Image
          src="/images/default_profile.png"
          alt="profile picture"
          width={90}
          height={90}
          className={styles.profile_pic}
        />
        <Image
          src="/images/edit_btn.svg"
          alt="edit button"
          width={24}
          height={24}
          className={styles.edit_btn}
        />
      </div>

      <form onSumbit={handleSubmit(onSubmitHandler)}>
        <div className={styles.form_section}>
          <label>이메일</label>
          <input {...register("email")} />
          <span>{watch("email") ? watch("email").length : 0}/ 16</span>
        </div>
        <div className={styles.form_section}>
          <label>이름</label>
          <input {...register("name")} />
          <span>{watch("name") ? watch("name").length : 0}/ 16</span>
        </div>
        <button
          type="submit"
          className={cn("submit_button", isValid && "isValid")}
        >
          <p>완료</p>
        </button>
      </form>
    </div>
  );
};

export default Profile;
