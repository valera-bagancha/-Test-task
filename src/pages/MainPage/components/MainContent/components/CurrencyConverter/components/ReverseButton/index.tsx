import { FC } from 'react'

interface IProps {
  handleReverse: () => void
}

const ReverseButton: FC<IProps> = ({ handleReverse }) => (
  <button type="button">
    <span onClick={handleReverse} className="material-symbols-outlined">
      sync_alt
    </span>
  </button>
)

export default ReverseButton
