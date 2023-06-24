import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import { Form } from "../../components/form/form";
import { EntityService } from "../../services/entityService";

export const ChangeEntity = () => {
  const [entity, setEntity] = useState({});
  const { entityId } = useParams();

  useEffect(() => {
    getEntity(entityId);
  }, [entityId]);

  const getEntity = async (entityId) => {
    const response = await EntityService.getEntity(entityId);
    setEntity(response.data);
  };

  return (
    <div>
      <h1>Change Entity {entityId}</h1>
      {<Form entity={entity} />}
    </div>
  );
};
