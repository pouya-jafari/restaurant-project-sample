interface MenuItemProps {
  img?: string;
  name: string;
  price: number;
  description: string;
}

export default function MenuItem({
  img = "",
  name,
  price,
  description = "",
}: MenuItemProps) {
  return (
    <div className="col-lg-6">
      <div className="d-flex align-items-center">
        <img
          className="flex-shrink-0 img-fluid rounded "
          src={img}
          alt={name}
          style={{ width: "80px" }}
        />
        <div className="w-100 d-flex flex-column text-start ps-4">
          <h5 className="d-flex justify-content-between border-bottom pb-2">
            <span className="menu-item-sec">{name}</span>
            <span className="text-primary">${price}</span>
          </h5>
          <small className="fst-italic text-white">{description}</small>
        </div>
      </div>
    </div>
  );
}
