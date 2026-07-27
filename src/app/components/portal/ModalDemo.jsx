import Modal from "@/app/components/portal/Modal";
import {ErrorBoundary} from "react-error-boundary";

export default function ModalDemo() {
   return (<div>
      <h4>Modal Demo</h4>
      <p>Modal Content</p>
      <ErrorBoundary fallback={<p>Something wrong in Modal component.</p>}>
         <Modal />
      </ErrorBoundary>
   </div>)
}