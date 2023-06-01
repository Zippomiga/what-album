import './button.css'


export default function Button({ className = null, onClick }) {
  const content = {
    'btn-insert-URL': 'Insertar',
    'btn-enable-all': 'Marcar Todo',
    'btn-disable-all': 'Desmarcar Todo',
    'btn-play': 'Jugar'
  }

  return (
    <button
      className={className}
      onClick={onClick}
    >
      {content[className]}
    </button>
  )
}