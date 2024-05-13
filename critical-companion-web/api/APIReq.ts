import Cookies from 'js-cookie';

const IP: string | undefined = process.env.REACT_APP_IP;

class ApiClient {
  serverUrl: string;
  accessToken: string | null;

  constructor() {
    this.serverUrl = `http://localhost:3001`;
    this.accessToken = Cookies.get('accessToken') || null;
  }

  setAccessToken(accessToken: string): void {
    Cookies.set('accessToken', accessToken);
    this.accessToken = accessToken;
  }

  getAccessToken(): string | null {
    return this.accessToken;
  }

  removeAccessToken(): void {
    this.accessToken = null;
    Cookies.remove('accessToken');
  }

  async _internal(APIUrl: string, method: string, body: string | null = null, content_type: string | null = null): Promise<{ status: number, data: any }> {
    const headers: Record<string, string> = {};

    if (this.accessToken)
      headers['Authorization'] = `Bearer ${this.accessToken}`;

    if (content_type)
      headers['Content-Type'] = content_type;

    const requestOptions: RequestInit = {
      method: method,
    };

    if (headers)
      requestOptions.headers = headers;
    if (body)
      requestOptions.body = body;
    try {
      const response = await fetch(this.serverUrl + APIUrl, requestOptions);
      const data = await response.json();
      return {
        status: response.status,
        data: data,
      };
    } catch (error) {
      throw error;
    }
  }

  async json(APIUrl: string, method: string, body: any = null): Promise<{ status: number, data: any }> {
    return this._internal(APIUrl, method, JSON.stringify(body), 'application/json')
      .then((response: any) => {
        if (response === undefined || response === null)
          throw new Error(`Error fetching data from server`);
        if (response.status !== 200)
          throw new Error(`KO ${response.status} ${response.data.msg}`);
        return response;
      })
      .catch((error: any) => {
        throw error;
      });
  }

  async withoutBody(APIUrl: string, method: string): Promise<{ status: number, data: any }> {
    return this._internal(APIUrl, method)
      .then((response: any) => {
        if (response === undefined || response === null)
          throw new Error(`Error fetching data from server`);
        if (response.status !== 200)
          throw new Error(`KO ${response.status} ${response.data.msg}`);
        return response;
      })
      .catch((error: any) => {
        throw error;
      });
  }

  async autoType(APIUrl: string, method: string, body: any = null): Promise<{ status: number, data: any }> {
    return this._internal(APIUrl, method, body, null)
      .then((response: any) => {
        if (response === undefined || response === null)
          throw new Error(`Error fetching data from server`);
        if (response.status !== 200)
          throw new Error(`KO ${response.status} ${response.data.msg}`);
        return response;
      }).catch((error: any) => {
        throw error;
      });
  }
}

export const APIReq = new ApiClient();
