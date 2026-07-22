import UserAccount from "@/app/components/conditional_render/UserAccount";
import ItemList from "@/app/components/list/ItemList";
import TodoListDemo from "@/app/components/list/TodoListDemo";
import CustomButtonDemo from "@/app/components/CustomButtonDemo";
import EventPropagationDemo from "@/app/components/EventPropagationDemo";

export default function Home() {
  return (
    <div>
       {/*<Profile profile={{*/}
       {/*   'name': 'Thazin',*/}
       {/*   'image': 'https://i.pinimg.com/736x/8c/6d/db/8c6ddb5fe6600fcc4b183cb2ee228eb7.jpg'*/}
       {/*}} size={70} />*/}
       {/*<Profile profile={{*/}
       {/*   'name': 'Joe',*/}
       {/*   'image': 'https://i.pinimg.com/736x/0b/97/6f/0b976f0a7aa1aa43870e1812eee5a55d.jpg'*/}
       {/*}} />*/}

       {/*<Border>*/}
       {/*   <Profile profile={{*/}
       {/*      'name': 'Thazin',*/}
       {/*      'image': 'https://i.pinimg.com/736x/8c/6d/db/8c6ddb5fe6600fcc4b183cb2ee228eb7.jpg'*/}
       {/*   }} size={70} />*/}
       {/*</Border>*/}
       {/*<Border>*/}
       {/*   <h2>Hello</h2>*/}
       {/*   <h2>How are you?</h2>*/}
       {/*</Border>*/}

       {/*<NestedComponent*/}
       {/*   style={{*/}
       {/*      backgroundColor: 'blue',*/}
       {/*      color: 'white',*/}
       {/*   }}*/}
       {/*   label={'Some Message'} />*/}

       {/*<UserAccount role={'admin'} />*/}

       {/*<ItemList items={['Apple', 'Orange', 'Banana']} />*/}

       {/*<TodoListDemo />*/}

       {/*<CustomButtonDemo />*/}

       <EventPropagationDemo />
    </div>
  );
}
