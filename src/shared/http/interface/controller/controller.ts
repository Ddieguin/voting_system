import { IHttpRequest, IHttpResponse } from '../../ports/http';

type handleMini = () => Promise<IHttpResponse>;
type handleFull = ({
  body,
  params,
  user_id,
  query,
}: IHttpRequest) => Promise<IHttpResponse>;

type handleBoth = handleMini | handleFull;

export interface IControllerBase {
  handle: handleBoth;
}
