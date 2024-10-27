export default function Table() {
    return (


        <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
            <table className="w-full text-sm text-left rtl:text-right text-gray-500 ">
                <thead className="text-xs text-gray-700 uppercase bg-gray-100 ">
                    <tr>
                        <th scope="col" className="px-6 py-3">
                            Período
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Segunda
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Terça
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Quarta
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Quinta
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Sexta
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr className="odd:bg-white  even:bg-gray-100  border-b ">
                        <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap ">
                            Manhã
                        </th>
                        <td className="px-6 py-4">
                            05:30 - 07:00
                        </td>
                        <td className="px-6 py-4">
                            05:30 - 07:00
                        </td>
                        <td className="px-6 py-4">
                            05:30 - 07:00
                        </td>
                        <td className="px-6 py-4">
                            05:30 - 07:00
                        </td>
                        <td className="px-6 py-4">
                            05:30 - 07:00
                        </td>
                    </tr>
                    <tr className="odd:bg-white even:bg-gray-100  border-b ">
                        <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                            Noite - Crianças e Juvenis
                        </th>
                        <td className="px-6 py-4">
                            18:00 - 19:30
                        </td>
                        <td className="px-6 py-4">
                            18:00 - 19:30
                        </td>
                        <td className="px-6 py-4">
                            18:00 - 19:30
                        </td>
                        <td className="px-6 py-4">
                            18:00 - 19:30
                        </td>
                        <td className="px-6 py-4">
                            18:00 - 19:30
                        </td>
                    </tr>
                    <tr className="odd:bg-white even:bg-gray-50  border-b ">
                        <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                            Noite - Adultos
                        </th>
                        <td className="px-6 py-4">
                            19:30 - 21:00
                        </td>
                        <td className="px-6 py-4">
                            19:30 - 21:00
                        </td>
                        <td className="px-6 py-4">
                            19:30 - 21:00
                        </td>
                        <td className="px-6 py-4">
                            19:30 - 21:00
                        </td>
                        <td className="px-6 py-4">
                            19:30 - 21:00
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>

    );
}