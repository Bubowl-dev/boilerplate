export interface SendMailResponse {
  id: number;
  status: string;
  conversion: string;
  date: {
    date: string;
    timezone_type: number;
    timezone: string;
  };
  project: {
    id: number;
    domain: string;
    urlPub: string;
    status: string;
    name: string;
    fields: Record<string, unknown>;
    leads: Record<string, unknown>;
    idClient: {
      id: number;
      nameF: string;
      nameRS: string;
      document_number: string;
      documents: Record<string, unknown>;
      projects: Record<string, unknown>;
    };
    defaultEmail: string;
  };
  attrs: Array<{
    id: number;
    content: string;
    idField: {
      id: number;
      name: string;
      type: string;
      class: string;
      status: string;
      isPriority: boolean;
    };
  }>;
}
