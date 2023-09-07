import { Filters } from './Filters'
import { type FilterValue } from '../types/types'

interface Props {
  activeCount: number
  completedCount: number
  filterSelected: FilterValue
  handleFilterChange: (filter: FilterValue) => void
  onClearCompleted: () => void
}

export const Footer: React.FC<Props> = ({
  activeCount = 0,
  completedCount = 0,
  filterSelected,
  handleFilterChange,
  onClearCompleted
}) => {
  return (
    <footer>
      <span>{activeCount} tareas pendientes</span>
      <Filters
        filterSelected={filterSelected}
        handleFilterChange={handleFilterChange}
      />
      {completedCount > 0 && (
        <button className='clear' onClick={onClearCompleted}>
          Borrar completadas
        </button>
      )}
    </footer>
  )
}
