import { elementsEnum } from '../../utils/constants';
import './filter.scss';

interface FilterProps {
    selectedElement: string;
    handleElementClick: (element: string) => void;
}

const Filter: React.FC<FilterProps> = ({
    selectedElement,
    handleElementClick,
}) => {
    return (
        <section className='filter-container'>
            <menu className='filter'>
                {elementsEnum.map(element => {
                    return (
                        <button
                            key={element.value}
                            className={`filter__button ${
                                selectedElement === element.value
                                    ? 'selected'
                                    : ''
                            }`}
                            onClick={() => handleElementClick(element.value)}>
                            {element.name}
                        </button>
                    );
                })}
            </menu>
        </section>
    );
};

export default Filter;
