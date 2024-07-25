import React from 'react'

function Navbar() {
  return (
    <div data-scroll-section className='w-full px-5 h-24    xl:px-20 xl:py-5 flex items-center justify-between absolute top-0 left-0'>
             <img className='w-14 h-14' src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/e8ddc4da-23dd-4502-b65b-378c9cfe5efa/dffq7j1-57bf4ccf-1ec2-4e7e-b663-e33cb9a0d488.png/v1/fill/w_1280,h_1280/team_magma_logo_by_jormxdos_dffq7j1-fullview.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTI4MCIsInBhdGgiOiJcL2ZcL2U4ZGRjNGRhLTIzZGQtNDUwMi1iNjViLTM3OGM5Y2ZlNWVmYVwvZGZmcTdqMS01N2JmNGNjZi0xZWMyLTRlN2UtYjY2My1lMzNjYjlhMGQ0ODgucG5nIiwid2lkdGgiOiI8PTEyODAifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.3IcxgwDkeJG0dgykeCFfQPeIRXmuetg6dssBwetpoSQ" alt="" />
             <div className='flex items-center justify-start gap-5'>
                <button className='px-3 py-2 rounded-3xl text-[12px] border text-white border-white'>Book a Demo</button>
                <button className='px-3 py-2 rounded-3xl text-[12px] border text-white border-white'>Menu</button>
             </div>
    </div>
  )
}

export default Navbar