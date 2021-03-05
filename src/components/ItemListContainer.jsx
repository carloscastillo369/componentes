const items = ["item1","item2","item3","item4","item5","item6","item7","item8"];

function ItemListContainer(props) {
    return (
        <div className="ItemListContainer bg-light">
            <p class="text-primary">{props.message}</p>
            <ul>
                {items.map((item) =>(
                    <li class="bg-info">{item}</li>
                ))}
            </ul>
        </div>
    );
}

export default ItemListContainer;