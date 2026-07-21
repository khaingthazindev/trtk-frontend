import Profile from "@/app/components/Profile";

export default function Home() {
  return (
    <div>
       <Profile profile={{
          'name': 'Thazin',
          'image': 'https://i.pinimg.com/736x/8c/6d/db/8c6ddb5fe6600fcc4b183cb2ee228eb7.jpg'
       }} size={70} />
       <Profile profile={{
          'name': 'Joe',
          'image': 'https://i.pinimg.com/736x/0b/97/6f/0b976f0a7aa1aa43870e1812eee5a55d.jpg'
       }} />
    </div>
  );
}
