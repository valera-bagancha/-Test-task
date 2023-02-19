import { FC } from 'react'

import FooterContact from './FooterContact'

import './style.scss'

const Footer: FC = () => (
  <footer className="footer">
    <p className="footer-text">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam eum
      quisquam facere magni eius ratione aperiam nemo dolorem, autem nostrum
      temporibus optio officiis veritatis eligendi nesciunt similique culpa
      voluptas at!
    </p>
    <FooterContact />
  </footer>
)

export default Footer
