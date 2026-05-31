import { Link } from 'react-router-dom';
import { categories } from '../../utils/constants';
import { CategoryIcon } from './icons/CategoryIcons';

const catNav = categories.map((name, i) => ({
  name,
  iconIndex: i,
}));

const Categories = () => {
    return (
        <section className="hidden sm:block bg-white mt-10 mb-4 min-w-full px-12 py-1 shadow overflow-hidden">

            <div className="flex items-center justify-between mt-4">

                {catNav.map((item, i) => (
                    <Link
                        to={`/products?category=${encodeURIComponent(item.name)}`}
                        className="flex flex-col gap-1.5 items-center p-2 group"
                        key={i}
                    >
                        <div className="h-16 w-16 rounded-full bg-emerald-50 border border-emerald-100 flex items-center justify-center shadow-sm group-hover:bg-emerald-100/80 transition-colors">
                            <CategoryIcon index={item.iconIndex} />
                        </div>
                        <span className="text-sm text-gray-800 font-medium text-center group-hover:text-primary-blue max-w-[7.5rem] leading-tight">
                            {item.name}
                        </span>
                    </Link>
                ))}

            </div>
        </section>
    );
};

export default Categories;
