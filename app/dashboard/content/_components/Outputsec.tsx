import React, { useEffect, useRef, useState } from 'react';
import '@toast-ui/editor/dist/toastui-editor.css';
import { Editor } from '@toast-ui/react-editor';
import { Copy } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface props {
  aiout: string;
}

function Outputsec({ aiout }: props) {
  const editorRef = useRef<any>('');
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    if (isClient && editorRef.current) {
      const editorInst = editorRef.current.getInstance();
      editorInst.setMarkdown(aiout);
    }
  }, [aiout, isClient]);

  return (
    <div className='bg-white shadow-lg border rounded-lg'>
      <div className='flex justify-between items-center p-3'>
        <h2 className='font-bold text-blue-700'>Your Result</h2>
        <Button className='bg-emerald-600 gap-2' onClick={()=>navigator.clipboard.writeText(aiout)}><Copy /> Copy</Button>
      </div>
      {isClient && (
        <Editor
          ref={editorRef}
          initialValue='hi'
          height='600px'
          initialEditType='wysiwyg'
          useCommandShortcut={true}
          onChange={() => console.log(editorRef.current.getInstance().getMarkdown())}
        />
      )}
    </div>
  );
}

export default Outputsec;