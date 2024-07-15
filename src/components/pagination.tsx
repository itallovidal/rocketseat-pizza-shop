import {
    Pagination as ShadCnPagination,
    PaginationContent,
    PaginationEllipsis,
    PaginationItem,
    PaginationLink, PaginationNext,
    PaginationPrevious
} from "@/components/ui/pagination.tsx";

interface IPaginationProps{
    pageIndex: number
    totalCount: number
    perPage: number
}


export function Pagination({totalCount, perPage, pageIndex} : IPaginationProps) {
    const pages = Math.ceil(totalCount / perPage) || 1

    return (
        <div className={'flex items-center justify-between'}>
            <span>
                Total de {totalCount} item(s).
            </span>

            <div>
                <ShadCnPagination>
                    <PaginationContent>
                        <PaginationItem>
                            <PaginationPrevious href="#" title="Anterior"/>
                        </PaginationItem>
                        {Array.from({length: pages}, (_, i)=>{
                            if(i > 2){
                                return
                            }

                            return (
                                <PaginationItem>
                                    <PaginationLink href="#">{i + 1}</PaginationLink>
                                </PaginationItem>
                            )
                        } )}
                        <PaginationItem>
                            <PaginationEllipsis />
                        </PaginationItem>
                        <PaginationItem>
                            <PaginationNext href="#" />
                        </PaginationItem>
                    </PaginationContent>
                </ShadCnPagination>
            </div>
        </div>
    );
}

