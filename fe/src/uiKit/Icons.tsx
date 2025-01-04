const Like = () => <img src="/assets/icons/likes.svg" alt="likes" className="w-5" />
const Folder = () => <img src="/assets/icons/FolderPlus.svg" alt="Folder" className="w-5" />
const Comments = () => <img src="/assets/icons/Comments.svg" alt="Comments" className="w-5" />
const ArrowDown = () => <img src="/assets/icons/ArrowDown.svg" alt="ArrowDown" className="w-5" />
const ArrowUp = () => <img src="/assets/icons/ArrowDown.svg" alt="ArrowUp" className="w-5 rotate-180" />
/** TODO: ArrowLeft нужно доделать поворот */
const ArrowLeft = () => <img src="/assets/icons/ArrowDown.svg" alt="ArrowLeft" className="w-5 rotate-90" />
/** TODO: ArrowRight нужно доделать поворот */
const ArrowRight = () => <img src="/assets/icons/ArrowDown.svg" alt="ArrowRight" className="w-5 rotate-45" />

const AttachFile = (props: { className?: string }) => (
  <img src="/assets/icons/AttachFileIcon.svg" alt="AttachFileIcon" className={'w-5'} {...props} />
);

export const Icons = {
  Like,
  Folder,
  Comments,
  ArrowDown,
  ArrowUp,
  ArrowLeft,
  ArrowRight,
  AttachFile,
}
