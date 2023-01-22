import Lottie from 'react-lottie';
import Image from 'next/image';
import animationData from 'lottie/main-chatting.json';
import GoogleLogo from '';
import styles from './index.module.scss';

const Home = () => {
  const mainChattingOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: { preserveAspectRatio: 'xMidYMid slice' },
  };
  return (
    <div className={styles.container}>
      <div className={styles.info}>
        <p className={styles.title}>다운채팅</p>
        <p className={styles.subtitle}>나다운 채팅방을 개설해 보세요!</p>
        <div className={styles.chatting}>
          <Lottie options={mainChattingOptions} height={254} width={254} />
        </div>
      </div>
      <button className={styles.google}>
        <Image className={styles.logo} src="/images/google-logo.svg" alt="google logo" width="34" height="34" />
        <p>구글로 시작하기</p>
      </button>
    </div>
  );
};

export default Home;
