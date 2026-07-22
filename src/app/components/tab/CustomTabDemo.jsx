import CustomTab from "@/app/components/tab/CustomTab";

export default function CustomTabDemo()
{
   return (<CustomTab headers={['Page 1', 'Page 2', 'Page 3']}>
      <div>This is page 1 content.</div>
      <div>This is page 2 content.</div>
      <div>This is page 3 content.</div>
   </CustomTab>)
}