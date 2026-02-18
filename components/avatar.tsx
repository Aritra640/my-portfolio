import Image from 'next/image';

export default async function Avatar() {
  return (
    <div className="avatar">
      <div className="w-24 rounded-full">
        <Image width={500} height={500} alt='picture of the author' src="https://img.daisyui.com/images/profile/demo/yellingcat@192.webp" />
      </div>
    </div>
  );
}
